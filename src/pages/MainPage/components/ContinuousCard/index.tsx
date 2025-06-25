import Card from '@/shared/ui/Card';
import ContinuousIc from '@/assets/continuousIc.svg';

interface IContinuousDayCard {
  continuousAttendance: number;
}

const ContinuousDayCard = ({ continuousAttendance }: IContinuousDayCard) => (
  <Card className="p-4 flex items-center justify-around">
    <div className="flex items-center gap-2">
      <img src={ContinuousIc} />
      <p className="text-regular-14 text-text-secondary">연속 학습일</p>
    </div>
    <p className="text-bold-16 text-text-primary">{continuousAttendance}일</p>
  </Card>
);

export default ContinuousDayCard;
