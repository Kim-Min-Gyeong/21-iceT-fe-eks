import PageHeader from '@/shared/layout/PageHeader';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ChattingPage = () => {
  const mode = useLocation().state?.mode;
  const navigate = useNavigate();

  useEffect(() => {
    if (!mode) {
      navigate('/new-chat');
    }
  }, [mode, navigate]);

  return (
    <div className="bg-background min-h-screen relative">
      <PageHeader title="챗봇" />
      <div className="px-4 space-y-6 mb-6">
        <p>채팅방....</p>
      </div>
    </div>
  );
};

export default ChattingPage;
