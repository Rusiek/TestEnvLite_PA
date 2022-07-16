#include "testgen.hpp"
#include "fast.hpp"
#include "slow.hpp"
#include "check.hpp"

namespace tstenv
{
    bool check(output_r& A, output_r& B)
    {
        return A.x == B.x;
    }
}
/* namespace tstenv */