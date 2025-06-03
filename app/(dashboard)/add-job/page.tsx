import CreateJobForm from "@/components/CreateJobForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

function AddJobPage() {
  const queryClient = new QueryClient()
  return (
    <main className="text-4xl">
      <div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CreateJobForm />
        </HydrationBoundary>
      </div>
    </main>
  );
}

export default AddJobPage;
