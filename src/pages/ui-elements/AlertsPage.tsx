import { Alert } from 'src/lib/ui/alerts/Alert';
import { ShadowAlert } from 'src/lib/ui/alerts/ShadowAlert';

export default function AlertsPage() {
    return (
        <>
            <div className="min-h-16 p-4 space-y-3">
                <Alert variant="danger">500 Server Error</Alert>

                <Alert variant="warning">Make Sure to Save Your File</Alert>

                <Alert variant="info">This is Styled With Tailwind css</Alert>

                <Alert variant="success">
                    Your Data Has Been Send Successfully
                </Alert>
            </div>

            <div className="min-h-16 p-4 space-y-3">
                <ShadowAlert variant="danger">500 Server Error</ShadowAlert>

                <ShadowAlert variant="warning">
                    Make Sure to Save Your File
                </ShadowAlert>

                <ShadowAlert variant="info">
                    This is Styled With Tailwind css
                </ShadowAlert>

                <ShadowAlert variant="success">
                    Your Data Has Been Send Successfully
                </ShadowAlert>
            </div>
        </>
    );
}
