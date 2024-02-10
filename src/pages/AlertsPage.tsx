import { ShadowAlert } from 'src/lib/ui/ShadowAlert';

export default function AlertsPage() {
    return (
        <>
            <div className="min-h-16 p-4 bg-ui-dark space-y-3 dark">
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

            <div className="min-h-16 p-4 bg-white space-y-3">
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
