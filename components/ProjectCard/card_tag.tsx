interface TagProps {
  buttonTheme?: "Dark" | "White";
  stackName: string;
}

export default function CardTag({ stackName, buttonTheme = "Dark" }: TagProps) {
  return (
    <div
      className={`h-10 ${
        buttonTheme === "Dark"
          ? "bg-backgroundGrey text-white"
          : "bg-white text-backgroundGrey"
      } text-center p-2 rounded-2xl mr-2`}
    >
      {stackName}
    </div>
  );
}
