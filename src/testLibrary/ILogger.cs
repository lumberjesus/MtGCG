namespace testLibrary
{
    /// <summary>
    /// Logging interface
    /// </summary>
    public interface ILogger
    {
        void LogVerbose(string message, Exception? ex = null, params object?[] args);
        
        void LogInfo(string message, Exception? ex = null, params object?[] args);

        void LogWarn(string message, Exception? ex = null, params object?[] args);
        
        void LogError(string message, Exception? ex = null, params object?[] args);
        
        void LogCritical(string message, Exception? ex = null, params object?[] args);

    }
}