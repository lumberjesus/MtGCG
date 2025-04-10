using System.Collections;
using System.IO;

namespace testLibrary
{
    /// <summary>
    /// Console Logger
    /// </summary>
    public class ConsoleLogger : ILogger
    {
        public void LogVerbose(string message, Exception? ex = null, params object?[] args)
        {
            Log("Verbose", message, ex);
        }
        public void LogInfo(string message, Exception? ex = null, params object?[] args)
        {
            Log("Info", message, ex);
        }
        public void LogWarn(string message, Exception? ex = null, params object?[] args)
        {
            Log("Warn", message, ex, args);
        }

        public void LogError(string message, Exception? ex = null, params object?[] args)
        {
            Log("ERROR", message, ex);
        }
        public void LogCritical(string message, Exception? ex = null, params object?[] args)
        {
            Log("CRITICAL", message, ex);
        }

        private void Log(string level, string message, Exception? ex = null, params object?[] args)
        {
            string msg = $"{DateTime.UtcNow} - {level} - {string.Format(message, args)}";
            if (ex != null)
            {
                msg = msg + " || " + ex.ToString();
            }

            switch(level)
            {
                case "Verbose" :
                    Console.ForegroundColor = ConsoleColor.Gray;
                    break;
                case "Info" :
                    Console.ForegroundColor = ConsoleColor.White;
                    break;
                case "Warn" :
                    Console.ForegroundColor = ConsoleColor.DarkYellow;
                    break;
                case "ERROR" :
                    Console.ForegroundColor = ConsoleColor.Red;
                    break;
                case "CRITICAL" :
                    Console.ForegroundColor = ConsoleColor.DarkRed;
                    break;
                default :
                    Console.ForegroundColor = ConsoleColor.DarkMagenta;
                    break;
            }
            
            Console.WriteLine(msg);
        }
    }
}