/**
 * Created by Kittxdev www.kittxdev.com
 * Developer: Padma Dev.E
 * Developer Contact: padmadev@kittxdev.com
 * Date: 10/07/24
 * Time: 21:58:09
 * Project: sh_mcq_web_next
 */
'use client'

export const createAPIAsyncReducers = (key, init) => ({
    [`${key}Requesting`]: (state) => {
        state[key].isLoading = true;
    }, [`${key}Success`]: (state, action) => {
        state[key].isLoading = false;
        state[key].error = null;
        state[key].data = action.payload;
    }, [`${key}Error`]: (state, action) => {
        state[key].isLoading = false;
        state[key].error = action.payload;
    }, [`${key}Reset`]: (state) => {
        state[key] = init;
    },
});


export const isJwtValid = (token) => {
    const decoded = jwt(token);
    const now = new Date().getTime() / 1000;
    return decoded.exp > now;
};

export const formatAxiosErrorMessage = (error) => {
    let err_msg = "";
    try {
        if (error.response) {
            if (
                401 === error.response.status &&
                window.location.pathname !== "/login"
            ) {
                eraseCookie(tokenKey);
                eraseCookie(refreshKey);
                window.location.replace(URL_LOGIN);
            } else if (error.response.status === 404) {
                // window.location.replace(URL_PAGE_NOT_FOUND);
            }
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            if ("detail" in error.response.data) {
                err_msg = error.response.data.detail;
            } else {
                for (const key in error.response.data) {
                    err_msg += error.response.data[key];
                }
            }
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             */
            err_msg = "Something went wrong";
        } else {
            // Something happened in setting up the request and triggered an Error
            err_msg = error.message;
        }
    } catch (err) {
        err_msg = "Something went wrong";
    }
    return err_msg;
};

export const getErrorMessage = (error) => {
    let message = "";
    for (const key of Object.keys(error)) {
        const val = error[key];
        if (message === "") {
            message = val;
        } else {
            message = `${message}, ${val}`;
        }
    }
    return message;
};

export const checkFormBlankOrEmpty = (data, skip = []) => {
    let result = [];

    for (const key of Object.keys(data)) {
        const val = data[key];

        if (val === null || val === "") {
            result.push({item: key, error: "Field required"});
        }

        if (key.toLowerCase().includes("email")) {
            if (!/\S+@\S+\.\S+/.test(val)) {
                result.push({item: key, error: "Invalid email format"});
            }
        }

        if (
            key.toLowerCase().includes("mobile") ||
            key.toLowerCase().includes("phone") ||
            key.toLowerCase().includes("number")
        ) {
            if (!/^\d{10}$/.test(val)) {
                result.push({item: key, error: "Invalid phone number format"});
            }
        }

        if (key.toLowerCase().includes("password") && !skip.includes("password")) {
            const valResult = validatePassword(val);
            if (valResult !== true) {
                result.push({item: key, error: valResult});
            }
        }

        if (key.toLowerCase().includes("confirm-password")) {
            if (data["password"] !== undefined) {
                if (data["password"] !== val) {
                    result.push({item: key, error: "Passwords do not match"});
                }
            } else if (data["new_password"] !== undefined) {
                if (data["new_password"] !== val) {
                    result.push({item: key, error: "Passwords do not match"});
                }
            }
        }
    }

    return result;
};


export const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};

export const removeIfExistOrElseAdd = (arr, obj, key) => {
    return arr.some((o) => obj[key] === o[key])
        ? arr.filter((o) => obj[key] !== o[key])
        : [...arr, obj];
};

export const DownloadFile = (url, fileName) => {
    // const link = document.createElement("a");
    // link.href = url;
    // link.target = "_blank";
    // link.download = "fileName.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    fetch(url, {method: "get", mode: "no-cors"})
        .then((res) => {
            res.blob().then(res => {
                console.log(res)
            })
            return res.blob()
        })
        .then((res) => {
            const aElement = document.createElement("a");
            aElement.setAttribute("download", fileName);
            const href = URL.createObjectURL(res);
            aElement.href = href;
            aElement.setAttribute("target", "_blank");
            aElement.click();
            URL.revokeObjectURL(href);
        });

    // const aElement = document.createElement("a");
    // aElement.setAttribute("download", "fileName.pdf");
    // aElement.setAttribute("target", "_blank");
    // aElement.href = url;
    // aElement.click();


    // axios.get(url, {
    //     headers: {}
    // })
    //     .then((result) => {
    //
    //         console.log(result.headers)
    //
    //         // const url = window.URL.createObjectURL(
    //         //     new Blob([result.data], {type: 'application/pdf'})
    //         // );
    //         // const link = document.createElement('a');
    //         // link.href = url;
    //         // link.setAttribute('download', `sample.pdf`);
    //         // document.body.appendChild(link);
    //         // link.click();
    //         // link.remove();
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });

};

export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};

export const scrollToBottom = (id) => {
    const element = document.getElementsByClassName(id);
    element.scrollTop = element.scrollHeight;
};
export const getReplySubject = (subject = "") => {
    if (subject.includes("Re: ")) {
        return subject;
    } else {
        return `Re: ${subject}`;
    }
};

export const getEmailMessageID = (uid = "") => {
    return uid.split(".")[1];
};
export const parseDate = (str) => {
    const mdy = str.split("-");
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
};

export const datediff = (first, second) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
};

export const getPercentage = (partialValue, totalValue) => {
    let temp = (100 * partialValue) / totalValue;
    if (temp > 0) {
        return temp;
    } else {
        return 0;
    }
};
export const qargsToQstring = (query_args = {}) => {
    let query_string = "";
    let idx = 0;
    for (const key in query_args) {
        if (idx === 0) {
            if (query_args[key] !== null && query_args[key] !== undefined) {
                query_string += "?" + key + "=" + query_args[key];
            }
        } else {
            if (query_args[key] !== null && query_args[key] !== undefined) {
                query_string += "&" + key + "=" + query_args[key];
            }
        }
        idx++;
    }
    return query_string;
};

export const canvasToBase64 = (canvas) => {
    if (!canvas) {
        return null;
    } else {
        return canvas.toDataURL();
    }
};

export const getFirstAndLastDateST = (dateTime) => {
    const givenDate = moment(dateTime);

    const startDay = givenDate
        .startOf("month")
        .set({hour: "00", minute: "00", second: "00"});
    const endDay = moment(givenDate)
        .endOf("month")
        .set({hour: "23", minute: "59", second: "59"});

    return {firstDay: startDay.valueOf(), lastDay: endDay.valueOf()};
};
export const getDaysList = (
    startDate,
    endDate,
    timestamp = false,
    format = "M/D/YYYY"
) => {
    const now = moment(startDate).clone();
    now.set({
        hour: "00",
        minute: "00",
        second: "00",
    });
    const end = moment(endDate);
    end.set({
        hour: "23",
        minute: "59",
        second: "59",
    });
    const dates = [];
    while (now.isSameOrBefore(end)) {
        let item = {date: now.format(format)};
        if (timestamp) {
            item.timeStamp = now.valueOf();
        }
        dates.push(item);
        now.add(1, "days");
    }
    if (timestamp) {
        dates[dates.length - 1].timeStamp = end.valueOf();
    }
    return dates;
};
export const getDayStartEndST = (dateTime) => {
    const givenDate = moment(dateTime);

    const startDay = givenDate.set({hour: "00", minute: "00", second: "00"});
    const endDay = moment(givenDate).set({
        hour: "23",
        minute: "59",
        second: "59",
    });

    return {dayStart: startDay.valueOf(), dayEnd: endDay.valueOf()};
};

export const patchUrl = (url = "", patches = []) => {
    let patchUrl = url;
    patches.forEach((item, idx) => {
        patchUrl = patchUrl.replace(item.key, item.value);
    });
    return patchUrl;
};

export const updateState = (oldList, updatedItem, pagination = false) => {
    if (!pagination) {
        return oldList.data.map((old) =>
            old.id === updatedItem.id ? {...updatedItem} : old
        );
    } else {
        let {data, ...other} = oldList;
        return {
            ...other,
            data: {
                ...data,
                results: data.results.map((old) =>
                    old.id === updatedItem.id ? {...updatedItem} : old
                ),
            },
        };
    }
};

export const generateBreadCrumbs = (pathName) => {
    let breadcrumbs = [];
    const pathSegments = pathName.split("/").filter((segment) => segment !== "");

    pathSegments.reduce((prevPath, segment) => {
        const currentPath = `${prevPath}/${segment}`;
        const matchingRoute = routes.private.find((route) => {
            if (route.path.includes(":")) {
                const routeSegments = route.path.split("/");
                const currentSegments = currentPath.split("/");
                if (routeSegments.length === currentSegments.length) {
                    return routeSegments.every((routeSegment, index) => {
                        return (
                            routeSegment === currentSegments[index] ||
                            routeSegment.startsWith(":")
                        );
                    });
                }
            } else {
                return route.path === currentPath;
            }
            return false;
        });
        if (matchingRoute) {
            breadcrumbs.push({
                actualPath: matchingRoute.path,
                path: pathName,
                label: matchingRoute.name,
            });
        }
        return currentPath;
    }, "");
    return breadcrumbs;
};

export const isEqual = (obj1, obj2) =>
    JSON.stringify(obj1) === JSON.stringify(obj2);

export const appendFilterToExistingUrl = (url, query) => {
    let stringQuery = qargsToQstring(query);
    if (hasQueryParams(url)) {
        return `${url}&${stringQuery.slice(1)}`
    } else {
        return `${url}${stringQuery}`
    }
}