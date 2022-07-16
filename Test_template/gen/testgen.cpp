#include <stdlib.h>
#include <time.h>
#include "testgen.hpp"

#define ONE_DIG 10

namespace tstenv
{
    input_r::input_r(int k)
    {
        if (k == -1)
        {
            this->x = rand() % ONE_DIG;
        }
        else
        {
            this->x = k;
        }
    }

    output_r::output_r(int k)
    {
        this->x = k;
    }

    bool output_r::operator==(const output_r& other) const
    {
        return this->x == other.x;
    }

    output_r output_r::operator+(const output_r& other) const
    {
        output_r output(this->x + other.x);
        return output;
    }
}
/* namespace tstenv */