export default function getCodeOfBooking(bookingId) {
    const code = bookingId.toString().substring(bookingId.toString().length - 6)
    return code
}
