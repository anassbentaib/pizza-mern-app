import {
  CardContent,
  CardFooter,
  CardHeader,
  Card,
} from "@/components/ui/card";
interface CardItemProps {
  header?: React.ReactElement;
  content?: React.ReactElement;
  footer?: React.ReactElement;
}
const CardItem = ({ header, content, footer }: CardItemProps) => {
  return (
    <Card className="bg-primary-500 border-none shadow-customShadow rounded-lg text-primaryColor">
      <CardHeader>{header}</CardHeader>
      <CardContent className="min-h-16">{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CardItem;
