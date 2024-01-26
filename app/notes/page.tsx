import '@/app/globals.css';
import CalculateTask from './calculate_task';

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


export default async function NotesPage() {

  return(
    <div>
      <CalculateTask />
    </div>
  );
}