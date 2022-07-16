#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <chrono>

#define TEST_DURATION static_cast<int64_t>(1)
#define chrono_time std::chrono::steady_clock::now()
#define seconds(A, B) (std::chrono::duration_cast<std::chrono::seconds>(A - B).count())
#define minutes(A, B) (std::chrono::duration_cast<std::chrono::minutes>(A - B).count())
#define hours(A, B) (std::chrono::duration_cast<std::chrono::hours>(A - B).count())

auto g_start = chrono_time;
auto g_end = chrono_time;

int main()
{
    srand(time(NULL));
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    while (seconds(g_end, g_start) < TEST_DURATION)
    {
        g_end = std::chrono::steady_clock::now();
    }

    return 0;
}