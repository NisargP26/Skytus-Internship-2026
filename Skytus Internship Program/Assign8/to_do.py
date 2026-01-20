tasks = []

def show_tasks():
    if not tasks:
        print("\nNo tasks yet!")
        return

    print("\nYour Tasks:")
    for index, task in enumerate(tasks, start=1):
        status = "✔" if task["done"] else "✘"
        print(f"{index}. [{status}] {task['title']}")

def add_task():
    title = input("Enter task: ")
    tasks.append({"title": title, "done": False})
    print("Task added!")

def complete_task():
    show_tasks()
    try:
        task_no = int(input("Enter task number to mark complete: "))
        tasks[task_no - 1]["done"] = True
        print("Task marked as completed!")
    except (IndexError, ValueError):
        print("Invalid task number!")

def delete_task():
    show_tasks()
    try:
        task_no = int(input("Enter task number to delete: "))
        tasks.pop(task_no - 1)
        print("Task deleted!")
    except (IndexError, ValueError):
        print("Invalid task number!")

while True:
    print("\n--- TO-DO LIST ---")
    print("1. View tasks")
    print("2. Add task")
    print("3. Complete task")
    print("4. Delete task")
    print("5. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        show_tasks()
    elif choice == "2":
        add_task()
    elif choice == "3":
        complete_task()
    elif choice == "4":
        delete_task()
    elif choice == "5":
        print("Goodbye!")
        break
    else:
        print("Invalid choice!")
