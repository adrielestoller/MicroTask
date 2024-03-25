import TaskCard from "../components/taskcard";
export default function Home() {
    return (
        <main className="w-auto m-2 flex flex-col gap-2 sm:w-1/2 sm:mx-auto">
            <h2 className="font-semibold">Backlog</h2>
            <TaskCard
                title="Task #00"
                contributors={["/profile.jpg", "/profile.jpg", "/profile.jpg"]}
            />
            <h2 className="font-semibold">Todo</h2>
            <TaskCard
                title="Task #00"
                contributors={["/profile.jpg", "/profile.jpg", "/profile.jpg"]}
            />
            <h2 className="font-semibold">In Progress</h2>
            <TaskCard
                title="Task #00"
                contributors={["/profile.jpg", "/profile.jpg", "/profile.jpg"]}
            />
            <h2 className="font-semibold">Done</h2>
            <TaskCard
                title="Task #00"
                contributors={["/profile.jpg", "/profile.jpg", "/profile.jpg"]}
            />
        </main>
    );
}
