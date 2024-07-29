import useNetworkStatus from "@/hooks/useNetworkStatus";
import { cn } from "@/lib/utils";

function NetworkStatus() {
  const { isOnline, showOnlineMessage } = useNetworkStatus();

  return (
    <div>
      {!isOnline && (
        <div className="fixed bottom-0 left-0 w-full bg-red-500 text-white text-center z-50">
          No internet connection.
        </div>
      )}
      {isOnline && (
        <div
          className={cn(
            "fixed bottom-0 left-0 w-full bg-green-500 text-white text-center z-50 transform transition-transform duration-300",
            showOnlineMessage ? "translate-y-0" : "translate-y-6"
          )}
        >
          You are online.
        </div>
      )}
    </div>
  );
}

export default NetworkStatus;
