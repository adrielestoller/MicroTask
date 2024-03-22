import TaskCard from "../components/taskcard";
export default function Home() {
    return (
        <main className="w-auto m-2 flex flex-col gap-2 sm:w-1/2 sm:mx-auto">
            <h2>Backlog</h2>
            <TaskCard
                title="Task #1"
                contributors={["/profile.jpg", "/profile.jpg", "/profile.jpg"]}
            />
            <h2>Todo</h2>
            <h2>In Progress</h2>
            <h2>Done</h2>
        </main>
    );
}
