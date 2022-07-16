#include "testgen.hpp"
#include "slow.hpp"

namespace tstenv
{
    output_r slow(const input_r& data)
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
            input_r data_1(data.x - 1);
            input_r data_2(data.x - 2);
            output = slow(data_1) + slow(data_2);
        }
        return output;
    }
}
/* namespace tstenv */
