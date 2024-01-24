import { useCheckSubscriptionIsCompleted } from '@/features/subscription/subscription';
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const PersistDashboard = () => {
    const { customData, customIsSuccess } = useCheckSubscriptionIsCompleted()
    const navigate = useNavigate();

    useEffect(() => {
        if (customIsSuccess) {
            const data = customData?.data;
            const { subscription_type } = data
            if (subscription_type === 'none') {
                return navigate("/subscription")
            }
        }

    }, [customData, navigate, customIsSuccess]);

    return <Outlet />;
}

export default PersistDashboard