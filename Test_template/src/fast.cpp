#include "testgen.hpp"
#include "fast.hpp"

namespace tstenv
{
    output_r fast(const input_r& data)
    {
        output_r output;
        if (data.x == 0)
        {
            output.x = 0;
        }
        else if (data.x == 1)
        {
            output.x = 1;
        }
        else
        {
            int a = 0;
            int b = 1;
            int c;
            for (int i = 2; i < data.x; ++i)
            {
                c = a + b;
                a = b;
                b = c;
            }
            output.x = c;
        }
        return output;
    }
}
/* namespace tstenv */