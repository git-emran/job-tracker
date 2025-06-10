"use server";
import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { JobType, CreateAndEditJobType } from "./types";
import { redirect } from "next/navigation";

async function authenticateAndRedirect(): Promise<string> {
  const { userId } = await auth();
  if (!userId) redirect("/");
  return userId;
}

export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  try {
    const userId = await authenticateAndRedirect();

    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });

    return job;
  } catch (error) {
    console.error("Create Job Error:", error);
    return null;
  }
}

type GetAllJobsActionTypes = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export async function getAllJobsAction({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionTypes): Promise<{
  jobs: JobType[];
  count: number;
  page: number;
  totalPages: number;
}> {
  try {
    const userId = await authenticateAndRedirect();

    const whereClause = {
      clerkId: userId,
      ...(search && {
        OR: [
          { position: { contains: search, mode: "insensitive" } },
          { company: { contains: search, mode: "insensitive" } },
        ],
      }),
      ...(jobStatus && jobStatus !== "all" && { status: jobStatus }),
    };

    console.log("Prisma whereClause:", JSON.stringify(whereClause, null, 2));

    const count = await prisma.job.count({ where: whereClause });

    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalPages = Math.ceil(count / limit);

    return { jobs, count, page, totalPages };
  } catch (error) {
    console.error("Get All Jobs Error:", error);
    return { jobs: [], count: 0, page: 1, totalPages: 0 };
  }
}

export async function deleteJobAction(id: string): Promise<JobType | null> {
  const userId = authenticateAndRedirect();

  try {
    const job: JobType = await prisma.job.delete({
      where: {
        id,
        clerkId: userId,
      },
    });
    return job;
  } catch {
    return null;
  }
}
export async function getSingleJobAction(id: string): Promise<JobType | null> {
  let job: JobType | null = null;
  const userId = authenticateAndRedirect();

  try {
    job = await prisma.job.findUnique({
      where: {
        id,
        clerkId: userId,
      },
    });
  } catch {
    job = null;
  }
  if (!job) {
    redirect("/jobs");
  }
  return job;
}
